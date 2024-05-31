import { useAuthContext } from "../context/AuthContext";

export const useStressScore = () => {
    const { authUser } = useAuthContext();

    const storeStressScore = async (label, score) => {
        try {
            const res = await fetch(`/api/stress/store/${authUser._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ label, score }) // Send label and score instead of message
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);
            // console.log(data);

        } catch (error) {
            console.error(error);
        }
    };




    return { storeStressScore };


}
