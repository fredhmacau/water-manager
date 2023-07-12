import adminLogin from "./core/admin/adminLogin";
import residentLogin from "./core/resident/residentLogin";
import getInfoAdmin from "./core/admin/getInfoAdmin";
import registerResident from "./core/admin/registerResident";
import getAllResidents from "./core/admin/getAllResidents";
import DeleteResident from "./core/admin/deleteResident";
import getPedingPayment from "./core/admin/getPedingPayment";
import reviewPayment from "./core/admin/reviewPayment";
import getInfoResident from "./core/resident/selectInfoResident";
import sendPayment from "./core/resident/sendPayment";
import alterResidence from "./core/admin/alterResidence";
const useHttp = function () {
  const loginAdmin = async function (values) {
    const response = await adminLogin(values);
    return response;
  };
  const loginResident = async function (values) {
    const response = await residentLogin(values);
    return response;
  };
  const getAdminInfo = async function (token) {
    const response = await getInfoAdmin(token);
    return response;
  };
  const getRegistersSize = async function (token) {
    const response = await getRegistersSize(token);
    return response;
  };
  const insertResident = async function (values) {
    const response = await registerResident(values);
    return response;
  };
  const viewAllResidents = async function () {
    const response = await getAllResidents();
    return response;
  };
  const removeResident = async function (resident_id) {
    const response = await DeleteResident(resident_id);
    return response;
  };
  const viewPedngPayment = async function () {
    const response = await getPedingPayment();
    return response;
  };
  const validPayment = async function (paymentId) {
    const response = await reviewPayment(paymentId);
    return response;
  };
  const viewInfoResident = async function (token) {
    const response = await getInfoResident(token);
    return response;
  };
  const registerPayment = async function (package_name,img) {
    const response = await sendPayment(package_name,img);
    return response;
  }
  const updateResidence=async function(preview_residence,new_residence){
    const response=await alterResidence(preview_residence,new_residence);
  }
  return {
    loginAdmin,
    loginResident,
    getAdminInfo,
    getRegistersSize,
    removeResident,
    validPayment,
    insertResident,
    viewAllResidents,
    viewPedngPayment,
    registerPayment,
updateResidence,
    viewInfoResident,
  };
};

export default useHttp;
