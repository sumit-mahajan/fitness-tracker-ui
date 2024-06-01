import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FontAwesomeIconWrapper({ icon, className }) {
  return (
    <div className={`text-center ${className}`} style={{ width: "22.5px" }}>
      <FontAwesomeIcon size="lg" icon={icon} />
    </div>
  );
}

export default FontAwesomeIconWrapper;
