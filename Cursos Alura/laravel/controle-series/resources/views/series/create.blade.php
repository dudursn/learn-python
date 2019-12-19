@extends("templates.layout")

@section("cabecalho", "Adicionar Séries")

@section("conteudo")
	@component("components.alert")
		@slot("tipo", "alert-danger")
		@slot("title")
			Mensagem de erro
		@endslot
		<strong>Error</strong>, uma mensagem de erro!
	@endcomponent

	@component("components.alert")
		@slot("tipo", "alert-success")
		@slot("title")
			Mensagem de sucesso
		@endslot
		Adicionado com sucesso!
	@endcomponent
	
	<form action="" method="post">
		<div class="input-group mb-2">
			<label for="nome">Nome:</label>
			<input type="text" class=form-control" name="nome">
		</div>

		<button type="submit" class="btn btn-primary">Adicionar</button>
		<a href="/series"><button type="button" class="btn btn-info">Voltar</button></a>

	</form>
@endsection
