import User from "./user";
import Post from "./Post";

User.hasOne(Post, { foreignKey: "userId", as: "post" });
Post.belongsTo(User, { foreignKey: "userId", as: "user" });

export { User, Post };
