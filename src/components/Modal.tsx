import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ModalProps {
  slug: string;
  onClose: () => void;
}

const Modal = ({ slug, onClose }: ModalProps) => (
  <div
    id="extra-large-modal"
    className="overlay modal bg-primary/10 opacity-100"
    role="dialog"
  >
    <div className="modal-dialog opacity-100 modal-dialog-xl">
      <div className="modal-content h-full">
        <div className="modal-header">
          <h3 className="modal-title">{slug.toUpperCase()}</h3>
          <button
            type="button"
            className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
            aria-label="Close"
            data-overlay="#extra-large-modal"
            onClick={onClose}
          >
            <span className="icon-[tabler--x] size-4"></span>
          </button>
        </div>
        <div className="modal-body">
          <p>BLAH BLAH BLAH</p>
        </div>
      </div>
    </div>
  </div>
);

export default function ModalRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  const closeModal = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Modal slug={slug} onClose={closeModal}></Modal>
    </>
  );
}
