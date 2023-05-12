import axios from "./fetchLibrary";

const fetchResultAPI = async (
    method: string,
    url: string,
    alias: string,
    data: object,
    id?: number
    ) => {
    try {
      let response = method === "get" && await axios
        .get(`${url}/${alias}`);

      if (id && method === "get") response = method === "get" && await axios.get(`${url}/${alias}/${id}`);

      response = method === "post" && await axios.post(`${url}/${alias}`, {
        ...data
      });

      if (id && method === "put") response = await axios
      .put(`${url}/${alias}/${id}`, {
        ...data
      });

      if (id && method === "delete") response = await axios
      .delete(`${url}/${alias}/${id}`);

      return response;
    } catch (error: any) {
      console.error(error.message);
    }
  };

export default fetchResultAPI;