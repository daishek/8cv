import { Badge } from "@/components/ui/badge";
import { Profile } from "@prisma/client";
// import Image from "next/image";
import Link from "next/link";
import More from "./more";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatedName } from "@/lib/utils";

interface ProfileGeneralProps {
  profile: Profile | null;
}

const ProfileGeneral: React.FC<ProfileGeneralProps> = ({ profile }) => {
  if (!profile) return;
  return (
    <div className="grid gap-y-9">
      <div className="flex items-center">
        <div className="flex-1 flex items-center gap-x-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src={profile?.image as string}
              alt={(profile.name as string) || "Profile image"}
            />
            <AvatarFallback>
              {formatedName(profile?.name as string)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h5 className="">{profile.name}</h5>
            <p className="text-muted-foreground text-sm">
              {profile.headline && profile.headline}
              {profile.headline && profile.location && " in "}
              {profile.location}
            </p>
            <div>
              {profile.website && (
                <Link
                  href={profile.website as string}
                  target="_blank"
                  className="text-xs"
                >
                  <Badge variant="secondary">{profile.website}</Badge>
                </Link>
              )}
            </div>
          </div>
        </div>
        <More username={profile.username} />
      </div>
      {profile.about && (
        <section>
          <h3 className="mb-2 sm:mb-3">About</h3>
          <div className="pl-3 sm:pl-0">
            <p className="text-muted-foreground">{profile.about}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfileGeneral;
