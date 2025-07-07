import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const app = express();
app.use(express.json());

function logRequest(req, res, next) {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
}

app.use(logRequest);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const users = [
  {
    id: "1",
    email: "user@examle.com",
    password: await bcrypt.hash("password123", 10),
  },
];

const jwtSecret = process.env.JWT_SECRET || "your_secret_key";

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwtSecret.sign(
      { userId: user.id, email: user.email },
      jwtSecret,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

function authenticateJWT(req, res, next) {
  const authHeader = req.header.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Forbidden: Invalid or expired token" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: "Unauthorized: No token povided" });
  }
}

app.get("/profile", authenticateJWT, (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    role: req.user.role,
    message: "Here is your profile information",
  });
});

function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role === role) {
      next();
    } else {
      return res
        .status(403)
        .json({
          message: "Forbidden: You do not have access to this resource",
        });
    }
  };
}

app.get("/me", authenticateJWT, (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    role: req.user.role,
    message: "Here is your personal information",
  });
});

app.get("/admin", authenticateJWT, authorizeRole("admin"), (req, res) => {
  res.json({
    message: "Welcome, Admin! You have access to this protected route.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
