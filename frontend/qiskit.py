from qiskit import *
from qiskit.tools.visualization import plot_bloch_multivector

circuit = QuantumCircuit(1,1)

circuit.cx(0,1)
simulator = Aer.get_backend('statevector_simulator')
result = execute(circuit, backend = simulator).result()
statevector = result.get_statevector()
print(statevector)

circuit.draw(output = 'mpl')

plot_bloch_multivector(statevector)
