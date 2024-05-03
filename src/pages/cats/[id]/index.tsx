type Cat = {
  name: string;
};

const cats: {
  [key: string]: Cat;
} = {
  "1": {
    name: "Barry",
  },
  "2": {
    name: "Larry",
  },
  "3": {
    name: "Harry",
  },
};

export default function Page({
  cat,
  variation,
}: {
  cat: Cat;
  variation: string;
}) {
  return (
    <div>
      <h1>Cat: {cat.name}</h1>
      <button
        style={{
          padding: "20px",
          background: variation === "blue" ? "SkyBlue" : "hotpink",
        }}
      >
        Feed
      </button>
    </div>
  );
}

const variations = ["control", "blue"];

const paths = variations
  .map((variation) => {
    return Object.keys(cats).map((id) => {
      if (variation === "control") {
        return {
          params: { id: id },
        };
      } else {
        return {
          params: { id: `${id}-${variation}` },
        };
      }
    });
  })
  .flat();

export const getStaticPaths = () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }: { params: { id: string } }) => {
  const [id, variation = "control"] = params.id.split("-");
  const cat = cats[id]; // GET Cat Details
  return {
    props: {
      cat,
      variation,
    },
  };
};
