{
  description = "Flake to develop ColonyJS using nix(OS)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: {
    devShell.x86_64-linux = with nixpkgs.legacyPackages.x86_64-linux;
      mkShell {
        buildInputs = [nodejs_20 pnpm zsh];
        shellHook = "exec zsh";
      };
  };
}
