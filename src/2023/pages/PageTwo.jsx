import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PageTwo = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid bg-darkBlue font-montserrat text-white">
        page Two
    </div>
  );
};

export default PageTwo;
