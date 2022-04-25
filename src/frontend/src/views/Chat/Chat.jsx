import Logout from "../../components/Logout/Logout";
import Messages from "../../components/Messages/Messages";
import SendMessage from "../../components/SendMessage/SendMessage";

function Chat() {
  return (
    <>
      <h2>Login correcto</h2>
      <Logout />
      <SendMessage />
      <Messages />
    </>
  );
}

export default Chat;
