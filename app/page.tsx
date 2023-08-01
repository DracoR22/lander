import { ProjectInterface } from "@/common.types"
import Categories from "@/components/Categories"
import LoadMore from "@/components/LoadMore"
import ProjectCard from "@/components/ProjectCard"
import { fetchAllProjects } from "@/lib/actions"

type ProjectSearch = {
  projectSearch: {
    edges: {node: ProjectInterface}[]
    pageInfo: {
      hasPreviousPage: boolean
      hasNextPage: boolean
      startCursor: string
      endCursor: string
    }
  }
}

type SearchParams = {
  category?: string 
  endcursor?: string
}

type Props = {
  searchParams: SearchParams
}

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0

const Home = async ({searchParams: { category, endcursor }}: Props) => {

const data = await fetchAllProjects(category, endcursor) as ProjectSearch

const projectsToDisplay = data?.projectSearch?.edges || []

if(projectsToDisplay.length === 0) {
  return (
    <section className="flex items-center justify-start flex-col lg:px-20 py-6 px-5">
       <Categories/>
       <p className="w-full text-center my-10 px-2">
        No projects found.
       </p>
    </section>
  )
}

const pagination = data?.projectSearch?.pageInfo

  return (
    <section className="flex justify-start flex-col lg:px-20 py-6 px-5 mb-16">
      <Categories/>
      
       <section className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10
        mt-10 w-full">
         {projectsToDisplay.map(({ node }: { node: ProjectInterface}) => (
           <ProjectCard key={node?.id} id={node?.id} image={node?.image} title={node?.title}
           name={node?.createdBy.name} avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}/>
         ))}
       </section>

     <LoadMore startCursor={pagination.startCursor}
      endCursor={pagination.endCursor}
      hasPreviousPage={pagination.hasPreviousPage}
      hasNextPage={pagination.hasNextPage}/>
    </section>
  )
}

export default Home