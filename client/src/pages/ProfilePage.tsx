import CenterContainer from "../components/CenterContainer";
import Title from "../components/Title";
import useUserStore from "../stores/useUserStore";

function ProfilePage() {
  const user = useUserStore(s => s.user);

  return (
    <CenterContainer>
      <div className="bl">
        <Title text="Profile" />
        <div className="mb-5 text-xl border-b-2">
          <h2 className="inline">Name: {user.name}</h2>
        </div>
        <div className="mb-5 text-xl border-b-2">
          <h2 className="inline-block">Email: {user.email}</h2>
        </div>
        <div className="mb-5 text-xl border-b-2">
          <h2 className="inline-block">Age: {user.age}</h2>
        </div>
      </div>
    </CenterContainer>
  );
}

export default ProfilePage;