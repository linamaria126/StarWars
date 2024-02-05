const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://www.swapi.tech/api",
      viewPeople: [],
      viewVehicles: [],
      viewPlanets: [],
      favorites: [],
    },
    actions: {
      getPeople: async () => {
        const localData = localStorage.getItem("people");
        if (localData) {
          setStore({ viewPeople: JSON.parse(localData) });
          return;
        }
        const store = getStore(); //intentar traer la información del localStorage, por los detalles recursivos.
        const response = await fetch(store.apiUrl + "/people");
        const dataPeople = await response.json();

        let peopleStore = [];

        for (let item of dataPeople.results) {
          const itemResponse = await fetch(item.url);
          const itemData = await itemResponse.json();

          peopleStore.push(itemData.result);
        }
        setStore({ viewPeople: peopleStore }); // buscar el uso del localStorage. Guardar dentro del fetch la información de peopleStore
        localStorage.setItem("people", JSON.stringify(peopleStore));
      },

      getVehicles: async () => {
        const localData = localStorage.getItem("vehicles");
        if (localData) {
          setStore({ viewVehicles: JSON.parse(localData) });
          return;
        }
        const store = getStore();
        const response = await fetch(store.apiUrl + "/vehicles");
        const dataVehicles = await response.json();
        let vehicleStore = [];

        for (let item of dataVehicles.results) {
          const itemResponse = await fetch(item.url);
          const itemData = await itemResponse.json();

          vehicleStore.push(itemData.result);
        }
        setStore({ viewVehicles: vehicleStore }); // buscar el uso del localStorage. Guardar dentro del fetch la información de peopleStore
        localStorage.setItem("vehicles", JSON.stringify(vehicleStore));
        console.log(viewVehicles);
      },

      getPlanets: async () => {
        const localPlanet = localStorage.getItem("planets");
        if (localPlanet) {
          setStore({ viewPlanets: JSON.parse(localPlanet) }); // Adicionar este if a los elementos Vehicles y people
          return;
        }
        const store = getStore();
        const response = await fetch(store.apiUrl + "/planets");
        const dataPlanets = await response.json();

        let planetStore = [];
        //setStore({ viewPlanets: dataPlanets.results });

        for (let item of dataPlanets.results) {
          const itemResponse = await fetch(item.url);
          const itemData = await itemResponse.json();

          planetStore.push(itemData.result);
        }
        setStore({ viewPlanets: planetStore });
        localStorage.setItem("planets", JSON.stringify(planetStore));
      },
      addFavorites: (newFavorite) => {
        const store = getStore();
        let listFavorites = store.favorites;
        let result = listFavorites.find((item) => item._id === newFavorite._id);
        console.log(newFavorite);
        if (result == undefined) {
          setStore({ ...store, favorites: [...listFavorites, newFavorite] });
        }
      },
      deleteFavorites: (id) => {
        const store = getStore();
        let favorites = store.favorites;
        let remove = favorites.splice(id, 1);
        console.log(remove);
        setStore({ favorites: favorites });
      },
    },
  };
};

export default getState;
