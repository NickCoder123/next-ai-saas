import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/login">
          <Button>
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}
