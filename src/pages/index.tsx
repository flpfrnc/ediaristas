import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e conheça todos os profissionais de sua localidade"
        }
      />
      <UserInformation
        name={"Felipe França"}
        picture={"https://github.com/flpfrnc.png"}
        rating={3}
        description={"Parnamirim"}
      />
    </div>
  );
}
