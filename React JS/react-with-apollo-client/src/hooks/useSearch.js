import { gql,useLazyQuery,useQuery } from "@apollo/client";


const SEARCH_CHARACTER = gql`
query SearchChar($name:String!){
    characters(filter:{name:$name}) {
        results {
            id name image
        }
    }
}
`;

export const useSearch=(name)=>{

    const [getCharacter,{error,data,loading}]=useLazyQuery(SEARCH_CHARACTER,{
        variables:{
            name:name
        }
    });


    return [getCharacter,{error,data,loading}];
}