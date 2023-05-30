import instance from "../../configAxios";
import FormData from "form-data";

export default async function registerResident(values, img) {
  const form = new FormData();
  form.append("username", `${values.firstname} +${values.last_name}`);
  form.append("email", values.email_address);
  form.append("contact", values.contact);
  form.append("image", img);
  const formHeaders = form.getHeaders;

  const result = await instance.get("/admin/get_info_admin", (data = form), {
    headers: {
      ...formHeaders,
      Authorization: `Bearer ${token}`,
    },
  });

  return result;
}
