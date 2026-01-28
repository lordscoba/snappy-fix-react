import { HeaderBody,PushBody,FooterBody } from "../components/pushnotifications/PushBody";


type Props = {};

const PushNotifications = (props: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f6f9ff] text-slate-800">
      <HeaderBody />
      <PushBody />
      <FooterBody />
    </div>
  );
};

export default PushNotifications;
