import { CommentedHeader } from "@src/components/commented";
import Layout from "@src/components/layouts/pages";
import { works } from "@src/components/works";
import { useRouter } from "next/router";
import { FC } from "react";
const InvalidQuery: FC<{ message: string }> = ({ message }) => {
  return (
    <Layout title="NOT FOUND">
      <div className="h-full text-center text-white justify-center">
        <CommentedHeader content={message} textSize={"8vw"} />
      </div>
    </Layout>
  );
};
const Work = () => {
  const router = useRouter();
  const { wid } = router.query;
  if (typeof wid !== typeof "string")
    return <InvalidQuery message="ERROR CODE: 500 - Invalid Query!" />;
  const work = works.getWorkById(wid as string);
  if (!work)
    return <InvalidQuery message="ERROR CODE: 404 - Work Doesn't Exist!" />;
  return <Layout title={work.title}></Layout>;
};

export default Work;
