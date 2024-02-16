import useUserStore from "../stores/useUserStore";

function ProfilePage() {
  const user = useUserStore(s => s.user);

  return (
    <div>
      name: {user.name}
    </div>
  );
}

export default ProfilePage;