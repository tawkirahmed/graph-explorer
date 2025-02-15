export type GInt32 = {
  "@type": "g:Int32";
  "@value": number;
};

export type GInt64 = {
  "@type": "g:Int64";
  "@value": number;
};

export type GDouble = {
  "@type": "g:Double";
  "@value": number;
};

export type GDate = {
  "@type": "g:Date";
  "@value": number;
};

export type GVertexProperty = {
  "@type": "g:VertexProperty";
  "@value": {
    id: GInt32;
    label: string;
    value: string | GInt32 | GDouble | GDate;
  };
};

export type GProperty = {
  "@type": "g:Property";
  "@value": {
    id: GInt32;
    key: string;
    value: string | GInt32 | GDouble | GDate;
  };
};

export type GVertex = {
  "@type": "g:Vertex";
  "@value": {
    id: string;
    label: string;
    properties: Record<string, Array<GVertexProperty>>;
  };
};

export type GEdge = {
  "@type": "g:Edge";
  "@value": {
    id: string;
    label: string;
    inVLabel: string;
    inV: string;
    outVLabel: string;
    outV: string;
    properties?: Record<string, GProperty>;
  };
};

export type GVertexList = {
  "@type": "g:List";
  "@value": Array<GVertex>;
};

export type GEdgeList = {
  "@type": "g:List";
  "@value": Array<GEdge>;
};

export type GremlinFetch = <TResult = any>(
  queryTemplate: string
) => Promise<TResult>;
