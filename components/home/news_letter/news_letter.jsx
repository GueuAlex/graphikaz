import "./news_letters.css";

const NewsLetter = () => {
  return (
    <div className="news-letter px-[2rem] py-[7rem] bg-orange-50 w-full flex justify-center items-center">
      <div className="h-[100%] w-[35rem] flex flex-col justify-center items-center">
        <h2 className="text-slate-900">S'inscrire à la newsletter &</h2>
        <small className="subtitle mt-3 text-stone-600 font-semibold">
          Restez informé des dernières mises à jour et tendances du secteur.
        </small>
        <div className=" mt-10 w-full my-3">
          <div className=" input_div bg-white  flex justify-between items-center ">
            <input
              type="text"
              className="flex-2"
              name=""
              id=""
              placeholder="Your email address"
            />

            <button type="button" className="bg-primary text-white">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
