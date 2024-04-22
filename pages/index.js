// import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import pdfjsWorkerSrc from '../pdf-worker'
// import 'react-pdf/dist/esm/pdf.worker.min.js';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc

const Home = () => {
  const url = '/sokai_2024.pdf'
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [totalPages, setTotalPages] = useState(0)

  const onLoadSuccess = ({ numPages }) => {
    setTotalPages(numPages)
  }

  /**
   * 1ページずつ表示する
   */
  const pdfContents = []
  for (let i = 0; i < totalPages; i++) {
    const d = (
      <Page
        key={i}
        pageNumber={i + 1}
        className="w-[200]  md:w-[400] lg:w-[600]"
      />
    )
    pdfContents.push(d)
  }

  return (
    <div className="h-screen  flex-col overflow-y-scroll scrollbar-hide">
      <Head>
        <title>HonkomaMimami</title>
        <link rel="icon" href="/baby.png" />
      </Head>
      <div className="absolute top-0 mb-10 w-full">
        <div className="relative z-40 flex h-20 w-full items-center bg-white after:absolute after:bottom-0 after:block after:h-2 after:w-full after:bg-[url('/line.jpg')] after:pl-[-24px] ">
          <h1 className="p-3 text-sm font-semibold md:p-6 md:text-xl">
            2024年度本駒込南保育園 父母の会 Web総会
          </h1>
        </div>
      </div>
      <div className=" relateive top-0 mt-[6rem] h-[8rem] w-full border-t-2 border-white  bg-[url('/unsplash.jpg')] bg-cover bg-center  md:h-[16rem]"></div>
      <div className="pl-3 pt-[1rem] md:grid md:grid-cols-8 md:gap-4">
        <div>{/* I am the left */}</div>
        <div className="mt-5 text-sm md:col-span-4 md:col-start-3 md:text-lg">
          <p className="font-semibold">総会手順</p>
          <ol className="p-2">
            <li className="p-2">
              1.本サイトに添付の［2024年度本駒込南保育園「父母の会」総会議案書］の内容を確認ください。
            </li>
            <li className="p-2">
              2.期間内に、ご質問は質問フォームより、投票フォームより賛否の投票を行ってください。
              投票／質問フォームは、それぞれ本サイトにボタンがございます。投票は、１世帯につき１票になります。園児全員の氏名を記載し、クラスを選択してください。
            </li>
            <li className="p-2">
              3.配信数の過半数の投票で総会が成立し、投票数の過半数の賛成をもって議案が承認されます。
            </li>
            <li className="p-2">
              4.総会が成立し議案が承認されましたら、今年度の「父母の会」会費納入のお知らせを配布いたします。
            </li>
          </ol>
          <p className="p-2">
            各クラスの「父母の会」役員に会費をお納めくださいますようお願いいたします。
          </p>
          <div className="mt-5 h-[500px] w-[100%] overflow-x-scroll overflow-y-scroll rounded-3xl border-2 border-gray-100 pt-8 scrollbar-hide md:mt-10">
            {/* <Document
              className="flex flex-col md:items-center"
              file={url}
              onLoadSuccess={onLoadSuccess}
            >
              {pdfContents}
            </Document> */}
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
              // onError={onDocumentError}
              className="flex flex-col md:items-center"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  className="w-[150px] md:w-[200px] lg:w-[500px]"
                />
              ))}
            </Document>
          </div>
          <div className="my-5">
            <div className="py-4">
              <h2 className="mb-2 font-semibold">議案書拡大・ダウンロード</h2>
              <a
                target="_blank"
                // href="https://drive.google.com/file/d/1Z5DG09qyjSmlm1xzKlfHRWgTDnFdW7wD/view?usp=sharing"
                href="https://drive.google.com/file/d/1TOG3VrLV1GT_B99KYVN2s3PckfAMGnwa/view?usp=sharing"
              >
                <button className=" mx-auto flex w-[40%] justify-center rounded bg-[#79b0f4] py-2 px-4 text-center text-sm text-white outline-none hover:bg-[#7996f4] md:w-[30%]">
                  ダウンロード
                </button>
              </a>
            </div>
            <div className="py-4">
              <h2 className="font-semibold">質問</h2>
              <p className="mb-4">質問期間 4月27日（土）～ 5月5日（日）</p>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFdfuWeG050iM5hwrl14bXND0MeqGVYgWqLSiSVqs73NVjLA/viewform?usp=sf_link"
              >
                <button className=" mx-auto flex w-[40%] justify-center rounded bg-[#79b0f4] py-2 px-4 text-center text-sm text-white outline-none hover:bg-[#7996f4] md:w-[30%]">
                  質問・ご意見
                </button>
              </a>
            </div>
            <div className="py-4">
              <h2 className="font-semibold">投票</h2>
              <p className="mb-4">投票期間 4月27日（土）～ 5月12日（日）</p>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSftt9IDhsXHlc11GidTiuGLOsNET8adSjKf3yCxtfneFjNaXA/viewform?usp=sf_link"
              >
                <button className=" mx-auto flex w-[40%] justify-center rounded bg-[#79b0f4] py-2 px-4 text-center text-sm text-white outline-none hover:bg-[#7996f4] md:w-[30%]">
                  投票ボタン
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>{/* I am the right */}</div>
      </div>
      <footer className="absolkute md:text-2l pt-5 pb-3 text-center text-sm md:pt-6 md:pb-6">
        <div className=" relative after:absolute after:top-0 after:block after:h-2 after:w-full after:bg-[url('/line.jpg')]">
          <p className="pt-6 font-semibold">
            本駒込南保育園父母の会 2024 <br />
            <a target="_blank" href="mailto:honkomaminami2024@gmail.com ">
            honkomaminami2024@gmail.com{' '}
            </a>{' '}
            <span className="ml-4">
              <a target="_blank" href="https://github.com/YoheiKo/minami_2022">
                github
              </a>
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
