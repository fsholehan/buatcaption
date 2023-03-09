import Card from "@/components/Card";
import CopyButton from "@/components/CopyButton";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (word === "") {
      return;
    }
    setLoading(true);
    const data = await axios.get(
      `https://tame-pear-catfish-belt.cyclic.app/api/?word=${word}`
    );
    const res = await data.data;
    setResult(res.content);
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
      <div className="w-full pb-10">
        <h1 className="font-medium text-lg text-gray-600 text-center pt-3">
          BuatCaption.
        </h1>
        <div className="md:w-2/5 w-3/4 mx-auto mt-5">
          <h1 className="">Apa yang bisa dibuat BuatCaption.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-3">
            <Card
              title="Artikel Generator"
              content="Pastinya, Saya dapat menghasilkan konten yang luar biasa
                dalam waktu singkat dengan hanya menentukan judul dan kata kunci
                yang tepat."
            />
            <Card
              title="Bikin Iklan!"
              content="Pastinya, aku bisa bikin iklan yang keren dan menarik untuk nambahin kesadaran merek dan menarik minat pelanggan baru dengan kemampuan nulis aku yang oke banget!"
            />
            <Card
              title="Caption Instagram"
              content="Tentu bisa, Saya dapat membuat caption Instagram yang catchy untuk menarik perhatian followersmu dengan mudah!"
            />
            <Card
              title="Judul Youtube"
              content="Saya bisa membuat judul YouTube yang menarik dan menarik minat dengan mudah!"
            />
            <Card
              title="Deskripsi Youtube"
              content="Saya dapat membuat deskripsi video YouTube yang menarik dan informatif dengan mudah, sehingga penonton akan lebih tertarik untuk menonton konten Anda."
            />
            <Card
              title="Jago CopyWritter"
              content="Sebagai copywriter berpengalaman, saya bisa membuat teks iklan yang menarik dan persuasif untuk menarik minat target audiens."
            />
          </div>
        </div>
        <div className="md:w-2/5 w-3/4 mx-auto my-5 flex flex-col gap-y-2">
          <h1 className="text-left font-medium">Masukkan text:</h1>
          <span className="text-sm">
            contoh: <b>Buatkan iklan jasa bikin website</b>
          </span>
        </div>
        <div className="flex items-center justify-center flex-col gap-y-4 md:w-2/5 w-3/4 mx-auto pt-5">
          <div className="bg-white w-full">
            <textarea
              onChange={(e) => setWord(e.target.value)}
              value={word}
              tabIndex={0}
              style={{ maxHeight: 200, height: 48, overflowY: "hidden" }}
              rows={1}
              className="m-0 w-full resize-none border-0 bg-white p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"
              defaultValue={word}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-4 py-1 bg-cyan-600 text-white font-medium text-sm active:scale-95 duration-75 transition"
          >
            Buat
          </button>
          {loading && <h1>Sebentar.....</h1>}
          {result && <CopyButton text={result} title="Salin" />}
          {result && (
            <div className="w-full p-7 bg-white rounded-md max-h-96 overflow-y-scroll">
              <div className="whitespace-pre-line">{result}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
