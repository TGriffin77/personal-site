import { useLocation, useNavigate } from "react-router-dom";
import Card from "./Card";
import { useEffect } from "react";

interface PortfolioItems {
  slug: string;
  description: string;
  image: string;
  type: string;
}

interface PortfolioAccordianProps {
  content: PortfolioItems[];
}

export default function PortfolioAccordian({
  content,
}: PortfolioAccordianProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = (slug: string) => {
    navigate(`/portfolio/${slug}`, { state: { background: location } });
  };

  const software = content.filter((item) => item.type === "software");
  const web = content.filter((item) => item.type === "web");
  const photography = content.filter((item) => item.type === "photography");

  // makes it so that the accordian has functionality upon reload or after loading
  useEffect(() => {
    window.HSStaticMethods.autoInit("accordion");
  });

  return (
    <div
      className="accordion divide-primary/100 divide-y"
      data-accordion-always-open
    >
      <div className="accordion-item active" id="payment-icon">
        <button
          className="accordion-toggle inline-flex items-center justify-between text-start"
          aria-controls="payment-icon-collapse"
          aria-expanded="true"
        >
          <span className="inline-flex items-center gap-x-4">
            <span className="icon-[tabler--heart-rate-monitor] text-base-content size-6"></span>
            Software Projects
          </span>
          <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
        </button>
        <div
          id="payment-icon-collapse"
          className="accordion-content w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="payment-icon"
          role="region"
        >
          <div className="px-5 pb-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
              {software[0] ? (
                software.map((item) => (
                  <div className="grow max-sm:w-full">
                    <Card
                      title={item.slug}
                      description={item.description}
                      onOpen={() => openModal(item.slug)}
                      image={item.image}
                    />
                  </div>
                ))
              ) : (
                <p className="text-base-content/80 font-normal">
                  Nothing here yet!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item" id="delivery-icon">
        <button
          className="accordion-toggle inline-flex items-center justify-between text-start"
          aria-controls="delivery-icon-collapse"
          aria-expanded="false"
        >
          <span className="inline-flex items-center gap-x-4">
            <span className="icon-[tabler--code] text-base-content size-6"></span>
            Web Development
          </span>
          <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
        </button>
        <div
          id="delivery-icon-collapse"
          className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="delivery-icon"
          role="region"
        >
          <div className="px-5 pb-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
              {web[0] ? (
                web.map((item) => (
                  <div className="grow max-sm:w-full">
                    <Card
                      title={item.slug}
                      description={item.description}
                      onOpen={() => openModal(item.slug)}
                      image={item.image}
                    />
                  </div>
                ))
              ) : (
                <p className="text-base-content/80 font-normal">
                  Nothing here yet!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item" id="cancel-icon">
        <button
          className="accordion-toggle inline-flex items-center justify-between text-start"
          aria-controls="cancel-icon-collapse"
          aria-expanded="false"
        >
          <span className="inline-flex items-center gap-x-4">
            <span className="icon-[tabler--camera] text-base-content size-6"></span>
            Photography
          </span>
          <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
        </button>
        <div
          id="cancel-icon-collapse"
          className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="cancel-icon"
          role="region"
        >
          <div className="px-5 pb-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
              {photography[0] ? (
                photography.map((item) => (
                  <div className="grow max-sm:w-full">
                    <Card
                      title={item.slug}
                      description={item.description}
                      onOpen={() => openModal(item.slug)}
                      image={item.image}
                    />
                  </div>
                ))
              ) : (
                <p className="text-base-content/80 font-normal">
                  Nothing here yet!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
