import axios from "./fetchLibrary";

const fetchResultAPI = async (
    method: string,
    url: string,
    alias: string,
    data: object,
    id?: number
    ) => {
    try {
      let response;
      
      // if (!id && method === "get") 
      response =  await axios.get(`${url}/${alias}`);
      // if (id && method === "get") response =  await axios.get(`${url}/${alias}/${id}`);

      // response = method === "post" && await axios.post(`${url}/${alias}`, {
      //   ...data
      // });

      // if (id && method === "put") response = await axios
      // .put(`${url}/${alias}/${id}`, {
      //   ...data
      // });

      // if (id && method === "delete") response = await axios
      // .delete(`${url}/${alias}/${id}`);
      // console.log(response);
      
      return response;
    } catch (error: any) {
      console.error(error.message);
    }
  };

export default fetchResultAPI;