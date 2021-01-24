import Post from 'src/components/Post'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    post: post(id: $id) {
      id
      feeling
      body
      createdAt(formatString: "MMMM Do, YYYY")
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article key={post.id}>
      <table>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Detials</th>
            <th>Date</th>
          </tr>
        </thead>
      </table>
      <header>
        <h2>{post.feeling}</h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
    </article>
  ))
}
