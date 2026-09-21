import { User } from "./services/user.js";
import dotenv from "dotenv";
dotenv.config();
async function main() {
    const user = new User(process.env.EPITECH_TOKEN);
    const result = await user.getStudentProfile();
    console.log(result);
}
main().catch(console.error);
//# sourceMappingURL=main.js.map
