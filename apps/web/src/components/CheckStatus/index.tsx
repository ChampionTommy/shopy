import { Icon20CheckCircleOutline } from "@vkontakte/icons";
export const CheckStatus = ({title}: any) => {
  return (
    <div className="status__block">
      <Icon20CheckCircleOutline width={20}/>
      <span>{title}</span>
    </div>
  );
}
