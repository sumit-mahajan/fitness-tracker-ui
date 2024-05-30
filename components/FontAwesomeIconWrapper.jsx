import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FontAwesomeIconWrapper({ icon }) {
  return (
    <div className="text-center" style={{ width: "22.5px" }}>
      <FontAwesomeIcon size="lg" icon={icon} />
    </div>
  );
}

export default FontAwesomeIconWrapper;
