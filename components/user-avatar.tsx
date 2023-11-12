import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar