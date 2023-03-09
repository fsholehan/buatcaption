import CopyButton from "@/components/CopyButton";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState({});
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await axios.get(
      `https://tame-pear-catfish-belt.cyclic.app/api/?word=${word}`
    );
    const res = await data.data;
    setResult(res);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Buat caption gratis</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 w-full">
        <div className="flex items-center justify-center flex-col gap-y-4 md:w-2/5 w-3/4 mx-auto pt-10">
          <textarea
            onChange={(e) => setWord(e.target.value)}
            value={word}
            tabIndex={0}
            style={{ maxHeight: 200, height: 48, overflowY: "hidden" }}
            rows={1}
            className="m-0 w-full resize-none border-0 bg-white p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
            defaultValue={word}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-cyan-600 text-white font-medium text-sm"
          >
            Buat
          </button>
          {loading && <h1>Sebentar.....</h1>}
          {result && (
            <div className="w-full p-7 bg-white rounded-md">
              <div>{result?.content}</div>
            </div>
          )}
          <CopyButton text={result?.content} />
        </div>
      </div>
    </>
  );
}
