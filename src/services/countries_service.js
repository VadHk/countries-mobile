import { gql, useQuery } from '@apollo/client';

export default  CountryService = ({ children }) => {

    const GET_COUNTRIES = gql`
        query {
            Country {
            _id
            name
            capital
            officialLanguages {_id, name}
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_COUNTRIES);

    // console.log(data && data.Country && data.Country[0]);

    return children({ data, error, loading });
}

