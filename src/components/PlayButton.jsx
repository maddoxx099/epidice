import { GooglePlayButton } from "react-mobile-app-button";
    
const PlayButton = () => {
  const APKUrl = "https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=en_US";

  return (
    <div>
      <GooglePlayButton
        url={APKUrl}
        theme={"light"}
        // className={""}
        // height={50}
        width={190}
      />
    </div>
  );
};
export default PlayButton