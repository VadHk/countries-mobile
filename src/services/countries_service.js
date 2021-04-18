import { gql, useQuery } from '@apollo/client';

export default CountriesService = () => {

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

    return data;
}

