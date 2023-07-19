import LeftSideBar from "../component/common/LeftSideBar";
import RightSideBar from "../component/common/RightSideBar";
import AiFormInput from "../component/make-category/FormInput";

const page = () => {
  return (
    <div class="flex min-h-screen">
      <LeftSideBar />
      <div class=" flex-1 py-10  px-5 sm:px-10 ">
        <AiFormInput />
      </div>
      <RightSideBar />
    </div>
  );
};

export default page;
