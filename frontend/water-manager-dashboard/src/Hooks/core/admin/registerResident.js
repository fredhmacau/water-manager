import instance from "../../configAxios";
import FormData from "form-data";

export default async function registerResident(values) {
  const form = new FormData();
  form.append("username", `${values.firstname} ${values.last_name}`);
  form.append("email", values.email_address);
  form.append("contact", values.contact);
  form.append("bi", values.bi);
  form.append("residence_n",values.residence_n)
  const formHeaders = form.getHeaders;

  const result = await instance.post("/admin/create_account_resident",form, {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

  return result;
}
