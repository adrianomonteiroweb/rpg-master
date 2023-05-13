import axios from "./fetchLibrary";

const fetchResultAPI = async (
    method: string,
    url: string,
    alias: string,
    data: object,
    id?: number
    ) => {
    try {
      switch (method) {
        case "get":
          return !id
            ? await axios.get(`${url}/${alias}`)
            : await axios.get(`${url}/${alias}/${id}`);

        case "put":
          return await axios.put(`${url}/${alias}/${id}`, {...data});

        case "delete":
          return await axios.delete(`${url}/${alias}/${id}`);
      
        default:
          const created = await axios.post(`${url}/${alias}`, {...data});
          console.log("POST", created);
          
          return created;
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

export default fetchResultAPI;