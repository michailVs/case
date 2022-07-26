import {useState} from 'react'

const CaseItem = () => {
    const [caseItem, setCaseItem] = useState([
        {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJK9diklb-DkvbiKvWBwTsEvcAhiO2Wrdnzjga2-ks_amr6IY7AIA5qNwrY_FK4wOrsgpbvot2XnqMh_Ovb/130fx97f/image.png', id: 1},
        {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJH4t27kYy0mvLwOq7c2DlQvJQk3r2Q8NikiQXg_0s_ZG7ydYXGIAdoZ1DU_FC2levm18W96Z7XiSw0sBF_N3Y/130fx97f/image.png', id: 2},
        {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJF-dKxmomZqPv9NLPF2G0JuMYj0ryYodzz3wG3qBJpa27wJdKdJ1dqZwqE8gPrwL3ujcO_tM_XiSw0r8Krvkk/130fx97f/image.png', id: 3},
        {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zPYgJA7cW5moWfqPbhJ7TFhGRf4cZOhuDG_Zi73FbjrUtsaj_3cdORcQJqNw7YrFO5wbzvgZe9vJ3JyHA1uSlx4CqPygv330-muln14A/130fx97f/image.png', id: 4},
        {src: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWdY781lxLHHoIin0FLsqUtqY26nLIWVdw9tZQyG_FC2k-3mjMO-6szMzHMx6CQ8pSGK0p08J-U/130fx97f/image.png', id: 5}
    ])
    let count = caseItem.length + 1
    const [randomItem, setRandomItem] = useState(0)
    const [randomFinaly, setRandomFinaly] = useState([])
    const randomaize = () => {
        if (caseItem.length < 1) {
            return false
        } else {
            let raCase = Math.floor(Math.random() * count)
            if (raCase < 1) {
                raCase = Math.floor(Math.random() * count)
            } else {
                setRandomItem(raCase)
                let itemInCase = caseItem.filter(item => item.id === randomItem)
                if (!itemInCase.length) {
                    itemInCase = caseItem.filter(item => item.id === randomItem)
                } else {
                    setRandomFinaly(itemInCase)
                }
            }
        }
    }
    return (
        <div>
            {!randomFinaly.length
            ? <h1>Открывай кейс</h1>
            : <div>
                {randomFinaly.map(item => <img key={item.id} src={item.src} alt="" />)}
            </div>
            }
            <button onClick={() => randomaize()}>Roll</button>
        </div>
    )
}

export default CaseItem