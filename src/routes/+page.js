export const load = async ({ fetch }) => {
    const response = await fetch(`/api/posts`)
    const posts = await response.json()
    const projectresponse = await fetch('/api/projects')
    const projects = await projectresponse.json()
  
    return {
      posts,
      projects
    }
  }