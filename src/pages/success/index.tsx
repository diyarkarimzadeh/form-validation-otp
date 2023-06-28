import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

interface SuccessData {
  firstName: string | string[] | undefined;
  lastName: string | string[] | undefined;
  cellPhone: string | string[] | undefined;
}

const Success = () => {
  const [data, setData] = useState<SuccessData>({
    firstName: "",
    lastName: "",
    cellPhone: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (router.query.cellPhone === undefined) {
      router.push("/");
    }
    setData({
      firstName: router.query.firstName,
      lastName: router.query.lastName,
      cellPhone: router.query.cellPhone,
    });
  }, [router.query]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-8`}
    >
      <div>
        <p>You successfuly logged in to your snapp market account.</p>
        <p>{`${data?.firstName} ${data?.lastName}`}</p>
        <p>{data?.cellPhone}</p>
      </div>
    </main>
  );
};

export default Success;
