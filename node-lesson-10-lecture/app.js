const app = express();
app.use(express.json());

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
        return res.status(401).json({ message: 'Incorrect password'})
    }

    const token = jwtSecret.substring(
        { userId: }
    )
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
