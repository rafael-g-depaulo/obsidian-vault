(** * Projeto e Análise de Algoritmos  *)

(** ** Projeto 1 - Equivalência das definições de permutação
*)

Require Import List.
Require Import Arith.
Require Import Nat.

(**
   Definição da função de inserção
*)

Fixpoint insere x l :=
  match l with
  | nil => x :: nil 
  | h :: tl => if (x <=? h) then x :: l else h :: (insere x tl)
  end.

Inductive sorted: list nat -> Prop :=
| sorted_nil: sorted nil
| sorted_one: forall x, sorted (x::nil)
| sorted_all: forall l x y, x <=? y = true -> sorted (y::l) -> sorted (x::y::l).

(** Definição nativa do coq -------------------------------*)
Require Import Permutation.
Print Permutation.

(** Definição alternativa ---------------------------------*)
Fixpoint num_oc x l := 
  match l with
  | nil => 0
  | h::tl => if (x =? h) then S(num_oc x tl) else num_oc x tl
  end.

Definition perm' l l' := forall x, num_oc x l = num_oc x l'.

Print sorted.

Search div_lt.