import { FunctionComponent } from "react";
import Link from "next/link";
import Head from "next/head";
import ReferenceLinks from "../../components/common/ReferenceLinks";
import { {{{ucf}}} } from '../../types/{{{ucf}}}';

interface Props {
  {{{name}}}: {{{ucf}}}[];
}

export const List: FunctionComponent<Props> = ({ {{{name}}} }) => (
  <div>
    <div>
      <Head>
        <title>{{{ucf}}} List</title>
        <meta property="og:title" content="{{{ucf}}} List" key="title" />
      </Head>
    </div>
    <h1>{{{ucf}}} List</h1>
    <Link href="/{{{name}}}/create">
      <a className="btn btn-primary">Create</a>
    </Link>
    <table className="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
{{#each fields}}
          <th>{{name}}</th>
{{/each}}
          <th/>
        </tr>
      </thead>
      <tbody>
        { {{{name}}} && ({{{name}}}.length !== 0) && {{{name}}}.map( ( {{{lc}}} ) => (
          <tr key={ {{{lc}}}['@id'] }>
            <th scope="row"><ReferenceLinks items={ {{{lc}}}['@id'] } type="{{{lc}}}" /></th>
            {{#each fields}}
              <td>{{#if reference}}<ReferenceLinks items={ {{{../lc}}}['{{{name}}}'] } type="{{{reference.title}}}" />{{else}}{ {{{../lc}}}['{{{name}}}'] }{{/if}}</td>
            {{/each}}
            <td><ReferenceLinks items={ {{{lc}}}['@id'] } type="{{{lc}}}" useIcon={true} /></td>
            <br></br>
            <Link  href={`${ {{~lc}}["@id"]}/edit`}>Edit</Link>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
