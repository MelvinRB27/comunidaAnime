// import Button from "../../components/buttons/buttons";
import GroupCardPremiereHome from "../../components/cards/group-card-premiere-home";
const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <GroupCardPremiereHome
        title="Entérate de los más populares de estas semanas"
        countCard={4}
        url="https://kitsu.io/api/edge/trending/anime"
        path="/most-popularity"
      />
      <GroupCardPremiereHome
        title="Los mejores animes lo tienes aquí"
        countCard={8}
        url="https://kitsu.io/api/edge/anime"
        path="/most-popularity"
      />
      {/* <GroupCardPremiereHome title="Entérate de los nuevos estrenos de estas semanas" url="https://kitsu.io/api/edge/trending/anime"/> */}
      {/* <Button nameButton="Crear" background="#5aada8" colorText="black" /> */}
    </div>
  );
};

export default Home;
