import Image from "next/image";
import { handleStatus } from "utils";
type CardErrors = {
  status: string;
};
export const ErrorInfoCard = ({ status }: CardErrors) => {
    return (
    <div className="infoCard">
      <div className="infoCard_logo">
        <Image
          src={handleStatus(status)?.data.image || ""}
          alt="infoCard__empty"
          width={206}
          height={206}
          className={`${status === "empty" ? "" : "infoCard_logo__img"}`}
        />
      </div>
      <div className="infoCard_title">
        <h1>
          {handleStatus(status)?.data.title}
        </h1>
      </div>
      <span className="infoCard_subtitle">
        {handleStatus(status)?.data.subtitle}
      </span>
      {handleStatus(status)?.data && (
        <a
          href={handleStatus(status)?.data.button.url}
          className="button button__default infoCard_button"
        >
          {handleStatus(status)?.data.button.title}
        </a>
      )}
    </div>
  );
};
