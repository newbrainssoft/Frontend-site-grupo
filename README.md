# Objetivos especificos listados na aba Issues 

## Airbnb React/JSX Style Guide

Texto adaptado: créditos [ronal2do](https://github.com/ronal2do/airbnb-react-styleguide)

*Uma abordagem para padronização de códigos usada pela [AirBNB](http://airbnb.io/) React e JSX, traducão feita com base [nesse repositório](https://github.com/airbnb/javascript/tree/master/react)*.

## Resumo 
  - Sempre retorne apenas um componente por arquivo;
  - Se possível, separe a view, lógica e estilo;
  - Para a view, sempre use a extensão .jsx;
  - Se o componente não possuir state, ele deve ser uma função;
  - Se possuir state, deve ser uma classe;
  - Não crie métodos com arrow function, atrapalha na depuração;
  - Faça o bind no método construtor da classe;
  - Sempre deixe o código mais limpo do que encontrou;
  - Nome de componentes em PascalCase;
  - Instâncias e props em camelCase;
  - Se o componente não possuir child, feche a tag nela mesma;

## Recomendações
  - Extensão ESLint
  - Extensão ES7 React/Redux/GraphQL/React-Native snippets

## Regras Básicas

  - Apenas **um** componente por arquivo.
    - Contudo, múltiplos componentes são permitidos quando são dependentes um do outro e apenas 1 tem retorno [Statefull ou Stateless ](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)são permitidos por arquivo. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
    
    ```jsx
    
    function Hello(props) {
      return <div>Hello {props.name}</div>;
    }
    class HelloJohn extends React.Component {
      render() {
        return <Hello name="John" />;
      }
    }
    module.exports = HelloJohn;
    ```
  - Sempre use a sintaxe JSX.
  - Não use `React.createElement` a não ser que você estaja declarando a partir de um arquivo que não seja JSX.

## `Class` vs `Functions`

  - Se você tem State interno e/ou refs, opte por `class extends React.Component` eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    ```jsx
    // ruim
    const Listing = React.createClass({
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    });

    // ideal
    class Listing extends React.Component {
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    }
    ```

    E se você não tem `state` ou `refs` , prefira funções normais ( não arrow functions ) sobre as classes:

    ```jsx
    // ruim
    class Listing extends React.Component {
      render() {
        return <div>{this.props.hello}</div>;
      }
    }

    // ruim (relying on function name inference is discouraged)
    const Listing = ({ hello }) => (
      <div>{hello}</div>
    );

    // ideal
    function Listing({ hello }) {
      return <div>{hello}</div>;
    }
    ```

## Nomenclatura

  - **Extensão**: Use a extensão `.jsx` para componentes React.
  - **Nome do arquivo**: Use PascalCase para os arquivos. Ex.: `MeuComponente.jsx`.
  - **Referência de nomenclatura**: Use PascalCase para componentes e camelCase para as instâncias. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // ruim
    import reservationCard from './ReservationCard';

    // ideal
    import ReservationCard from './ReservationCard';

    // ruim
    const ReservationItem = <ReservationCard />;

    // ideal
    const reservationItem = <ReservationCard />; //instância em camel e componente em Pascal
    ```

  - **Nomeando componentes**: Use o mesmo nome do componente. Ex.: `MeuComponente.jsx` tem um nome que referência `MeuComponente`. No entanto, para os componentes de raiz de um diretório, use ` index.jsx` como o nome do arquivo e usar o nome de diretório como o nome do componente:
    
  * App     
      ├─┬ Footer     
      │ ├── index.jsx (O componente Footer está declarado na index)     
      │ ├── MeuComponente.jsx      
      │      
      ├─┬ Header     
      │ ├── index.jsx (O componente Header está declarado na index)     
      │ │     
      │ ├─┬ Meta     
      │ │ ├── index.jsx (O componente Meta está declarado na index)            
      │ │     
      │ ├─┬ Menu.jsx      
      │ │ ├── index.jsx      
      │ │ ├── Item.jsx      

    ```jsx
    // ruim
    import Footer from './Footer/Footer';

    // ruim
    import Footer from './Footer/index';

    // ideal
    import Footer from './Footer';
    ```
    
## Indentação

  - Siga estes estilos de indentação para sintaxe JSX. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // ruim
    <Componente primeiroParametro="bar"
                maisUmParametro="baz" />

    // ideal
    <Componente
      primeiroParametro="bar"
      maisUmParametro="baz"
    />

    // Se for apenas um parâmetro coloque na mesma linha.
    <Componente bar="bar" />

    // children recebe indentação normal.
    <Componente
      primeiroParametro="bar"
      maisUmParametro="baz"
    >
      <ComponenteFilho />
    </Componente>
    ```

## Aspas

  - Sempre usa aspas duplas (`"`) para atributos, mas aspas simples para todos os outros JS usados no componente. eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

  > Sério? Atributos JSX [can't contain escaped quotes](http://eslint.org/docs/rules/jsx-quotes), assim aspas fazem conjunções como `"Don't"` tornando-se mais fáceis de digitar.
  > atributos regulares HTML também costumam usar aspas duplas em vez de únicas, de modo atributos JSX espelhão esta convenção.

    ```jsx
    // ruim
    <Componente bar='bar' />

    // ideal
    <Componente bar="bar" />

    // ruim
    <Componente style={{ left: "20px" }} />

    // ideal
    <Componente style={{ left: '20px' }} />
    ```

## Espaçamento

  - Sempre inclua um único espaço no fechamento de suas tags que não recebem `childrens`.

    ```jsx
    // ruim
    <Foo/>

    // tá de sacanagem néh?
    <Foo                 />

    // ruim
    <Foo
     />

    // ideal
    <Foo />
    ```

  - Não precisa usar espaço dentro nas chaves de parâmetros de um componente. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // ruim
    <Foo bar={ baz } />

    // ideal
    <Foo bar={baz} />
    ```

## Props

  - Sempre use `camelCase` para prop names.

    ```jsx
    // ruim
    <Componente
      UserName="hello"
      phone_number={12345678}
    />

    // ideal
    <Componente
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - Quando o valor Booleano for `true` pode ser omitido. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // ruim
    <Component
      hidden={true}
    />

    // ideal
    <Component
      hidden
    />
    ```

  - Sempre inclua o parâmetro `alt` em suas `<img>` tags. E `alt` pode ser uma string vazia em `<img>` . eslint: [`jsx-a11y/img-has-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md)

    ```jsx
    // ruim
    <img src="hello.jpg" />

    // ideal
    <img src="hello.jpg" alt="Me waving hello" />

    // ideal
    <img src="hello.jpg" alt="" />
    ```

  - Não use palavras como "image", "photo", ou "picture" no `alt` de sua `<img>` . eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  > Sério? Screenreaders já interpretam `img` como um elemento de imagem, por isso não há necessidade de incluir esta informação no texto do alt.

    ```jsx
    // ruim
    <img src="hello.jpg" alt="Picture of me waving hello" />

    // ideal
    <img src="hello.jpg" alt="Me waving hello" />
    ```
    
  - Evite usar `index` como `key` de props, opte por um ID. ([Sério?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```jsx
  // ruim
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // ideal
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

## Refs

  - Sempre use `ref callbacks`. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

    ```jsx
    // ruim
    <Foo
      ref="myRef"
    />

    // ideal
    <Foo
      ref={(ref) => this.myRef = ref}
    />
    ```

## Parenteses

  - Coloque Tags JSX entre parênteses quando eles abrangem mais de uma linha. eslint: [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

    ```jsx
    // ruim
    render() {
      return <Componente className="long body" foo="bar">
               <ComponenteFilho />
             </Componente>;
    }

    // ideal
    render() {
      return (
        <Componente className="long body" foo="bar">
          <ComponenteFilho />
        </Componente>
      );
    }

    // ideal, para uma linha.
    render() {
      const body = <div>hello</div>;
      return <Componente>{body}</Componente>;
    }
    ```

## Tags

  - Sempre que a Tag não possuir `children` use *self-close* ( <Ex /> ). eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // ruim
    <Foo className="stuff"></Foo>

    // ideal
    <Foo className="stuff" />
    ```

  - Se o seu componente tiver mais de uma linha de propriedades(props), feche a Tag em uma nova linha. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // ruim
    <Foo
      bar="bar"
      baz="baz" />

    // ideal
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## Métodos (Methods)

  - Use arrow functions para variáveis locais.

    ```jsx
    function ItemList(props) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={() => fazerAlgoCom(item.name, index)}
            />
          ))}
        </ul>
      );
    }
    ```

  - Manipuladores de evento do método render dentro do `constructor()` eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)


    ```jsx
    // ruim
    class extends React.Component {
      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv.bind(this)} />
      }
    }

    // ideal
    class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickDiv = this.onClickDiv.bind(this);
      }

      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv} />
      }
    }
    ```
    
  - Certifique-se de retornar um valor em seu método  `render`. eslint: [`require-render-return`](https://github.com/yannickcr/eslint-plugin-react/pull/502)

    ```jsx
    // ruim
    render() {
      (<div />);
    }

    // ideal
    render() {
      return (<div />);
    }
    ```
