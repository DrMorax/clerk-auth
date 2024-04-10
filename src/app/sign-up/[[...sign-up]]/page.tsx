import { SignUp } from "@clerk/nextjs";
import "../../auth.css";

export default function Page() {
  return (
    <div className="auth-page">
      <SignUp />
    </div>
  );
}
