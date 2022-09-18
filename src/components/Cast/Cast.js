import { useEffect, useState } from "react";
import { getMovieCredits } from "services/api";
import { useParams } from "react-router-dom";
import { Box } from "components/Box";
import { ProfileName, ProfilePic } from "./Cast.styled";

const Cast = () => {
    const [credits, setCredits] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
              let response = getMovieCredits(id)
              let credits = (await response).data.cast
              console.log(credits);
              setCredits(credits)
            } catch (error) {
              console.log(error);
            }
          }
          fetchData().catch(console.error);
    }, [id])

    return (
        <ul>
            {credits.map(credit => {
                return <Box as="li" key={credit.id} display="flex" alignItems="center" marginBottom="30px">
                  <Box marginRight="30px">
                    {credit.profile_path ? <ProfilePic src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} alt="" /> : <ProfilePic src={`https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`} alt="" />}
                  </Box>
                  <Box>
                    <ProfileName>{credit.name}</ProfileName>
                    <p>Character: {credit.character}</p>
                  </Box>
                </Box>
            })}
        </ul>
    );
  };

export default Cast

