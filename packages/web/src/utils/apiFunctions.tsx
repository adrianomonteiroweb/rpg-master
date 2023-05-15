import axios from "./fetchLibrary";

const fetchResultAPI = async (
    method: string,
    url: string | undefined,
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
      
        case "post":
          console.log(`${url}/${alias}`, {...data});
          
          return await axios.post(`${url}/${alias}`, {...data});
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

export default fetchResultAPI;